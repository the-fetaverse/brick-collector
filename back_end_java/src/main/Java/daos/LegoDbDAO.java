package daos;

import models.LegoSet;

import java.util.List;

public interface LegoDbDAO {
    // CRUD operations

    // Read:
    public List<LegoSet> findSetByName(String name);
}