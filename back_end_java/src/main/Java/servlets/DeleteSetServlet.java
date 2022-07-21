package servlets;

import com.fasterxml.jackson.databind.ObjectMapper;
import daos.LegoSetDAO;
import daos.LegoSetDAOImpl;
import services.UrlParserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = "/delete/*")
public class DeleteSetServlet extends HttpServlet {
    LegoSetDAO dao = new LegoSetDAOImpl();
    ObjectMapper mapper = new ObjectMapper();
    UrlParserService urlParser = new UrlParserService();

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int id = urlParser.extractIdFromURL(req.getPathInfo());
        System.out.println(id);
            dao.deleteSet(id);
            resp.setContentType("application/json");
            resp.setStatus(201);

    }
}
