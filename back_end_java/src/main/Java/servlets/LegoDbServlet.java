package servlets;

import com.fasterxml.jackson.databind.ObjectMapper;
import daos.LegoDbDAO;
import daos.LegoDbDAOImpl;
import models.ErrorMsg;
import models.LegoSet;
import services.UrlNameParserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(urlPatterns = "/lego-db/*")
public class LegoDbServlet extends HttpServlet {

    LegoDbDAO dao = new LegoDbDAOImpl();
    ObjectMapper mapper = new ObjectMapper();
    UrlNameParserService urlParser = new UrlNameParserService();

    // Find sets:
    // If there is an id, returns the wanted set.
    // If there is no id, returns all sets.
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            String name =  urlParser.extractNameFromUrl(req.getPathInfo());
            List<LegoSet> legoSet = dao.findSetByName(name);
            if(legoSet != null) {
                resp.setContentType("application/json");
                resp.getWriter().print(mapper.writeValueAsString(legoSet));
                System.out.println(legoSet);
            } else {
                resp.setStatus(404);
                resp.getWriter().print(mapper.writeValueAsString(new ErrorMsg("Please provide a valid name")));
            }

        } catch( Exception e) {
            e.printStackTrace();
        }
    }
}
