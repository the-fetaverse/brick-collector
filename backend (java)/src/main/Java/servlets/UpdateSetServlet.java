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
import java.io.InputStream;

@WebServlet(urlPatterns = "/update-set/*")
public class UpdateSetServlet extends HttpServlet {
    LegoSetDAO dao = new LegoSetDAOImpl();
    ObjectMapper mapper = new ObjectMapper();
    UrlParserService urlParser = new UrlParserService();

    // Update color:
    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int id = urlParser.extractIdFromURL(req.getPathInfo());
        InputStream reqBody = req.getInputStream();
        LegoSet updatedSet = mapper.readValue(reqBody, LegoSet.class);
        updatedSet = dao.updateSet(updatedSet, id);
        if(updatedSet != null) {
            resp.setContentType("application/json");
            resp.getWriter().print(mapper.writeValueAsString(updatedSet));
            resp.setStatus(201);
        } else {
            resp.setStatus(404);
            resp.getWriter().print(mapper.writeValueAsString(new ErrorMsg("Please provide a valid id")));
        }
    }
}
