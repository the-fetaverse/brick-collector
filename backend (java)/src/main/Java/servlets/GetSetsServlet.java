package servlets;

import com.fasterxml.jackson.databind.ObjectMapper;
import daos.LegoSetDAO;
import daos.LegoSetDAOImpl;
import models.ErrorMsg;
import models.LegoSet;
import services.UrlParserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(urlPatterns = "/get-set/*")
public class GetSetsServlet extends HttpServlet {

    LegoSetDAO dao = new LegoSetDAOImpl();
    ObjectMapper mapper = new ObjectMapper();
    UrlParserService urlParser = new UrlParserService();

    // Find sets:
    // If there is an id, returns the wanted set.
    // If there is no id, returns all sets.
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            int id = urlParser.extractIdFromURL(req.getPathInfo());
            LegoSet legoSet = dao.findSetByID(id);
            if(legoSet != null) {
//                resp.setHeader("Access-Control-Allow-Origin", "http://localhost:4200/");
//                resp.setHeader("Access-Control-Allow-Methods","GET");
                resp.setContentType("application/json");
                resp.getWriter().print(mapper.writeValueAsString(legoSet));
            } else {
                resp.setStatus(404);
                resp.getWriter().print(mapper.writeValueAsString(new ErrorMsg("Please provide a valid id")));
            }

        } catch( Exception e) {
            List<LegoSet> legoSets = dao.findAllSets();
//            resp.setHeader("Access-Control-Allow-Origin", "http://localhost:4200/");
//            resp.setHeader("Access-Control-Allow-Methods","GET");
            resp.setContentType("application/json");
            resp.getWriter().print(mapper.writeValueAsString(legoSets));
        }
    }
}
