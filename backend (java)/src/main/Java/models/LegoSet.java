package models;

public class LegoSet {
    // Class fields
    private int id;
    private String name;
    private int year;
    private String img;
    private String theme;

    // Constructors
    // Default
    public LegoSet() {
    }

    // With id
    public LegoSet(int id, String name, int year, String img, String theme) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.img = img;
        this.theme = theme;
    }

    // Without id
    public LegoSet(String name, int year, String img, String theme) {
        this.name = name;
        this.year = year;
        this.img = img;
        this.theme = theme;
    }

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    //ToString

    @Override
    public String toString() {
        return "LegoSet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", year=" + year +
                ", img='" + img + '\'' +
                ", theme='" + theme + '\'' +
                '}';
    }
}
