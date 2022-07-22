package daos;

import configurations.LegoDBCreds;
import models.LegoSet;

import java.sql.*;
import java.util.LinkedList;
import java.util.List;

public class LegoDbDAOImpl implements LegoDbDAO {
    @Override
    public List<LegoSet> findSetByName(String name) {
        String sql = "SELECT * FROM sets WHERE name = ?";
        LinkedList<LegoSet> results = new LinkedList<>();

        try(Connection conn = LegoDBCreds.getInstance().getConnection()) {
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, name);
            ResultSet res = ps.executeQuery();
            while(res.next()) {
                LegoSet legoSet = new LegoSet(
                        res.getString("name"),
                        res.getInt("year"),
                        res.getInt("num_parts"),
                        res.getString("set_num"));
                results.add(legoSet);
            }
            return results;

        } catch(SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}