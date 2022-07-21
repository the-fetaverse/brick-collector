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

@WebServlet(urlPatterns = "/save/")
public class SaveSetServlet extends HttpServlet {
    LegoSetDAO dao = new LegoSetDAOImpl();
    ObjectMapper mapper = new ObjectMapper();
    UrlParserService urlParser = new UrlParserService();

    // Save new set:
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        InputStream reqBody = req.getInputStream();
        LegoSet newSet = mapper.readValue(reqBody, LegoSet.class);
        newSet = dao.createSet(newSet);
        if(newSet != null) {
            resp.setContentType("application/json");
            resp.getWriter().print(mapper.writeValueAsString(newSet));
            resp.setStatus(201);
        } else {
            resp.setStatus(400);
            resp.getWriter().print(mapper.writeValueAsString(new ErrorMsg("Brick could not be saved")));
        }
    }
}
