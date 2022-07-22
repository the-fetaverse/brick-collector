package services;

import java.util.Arrays;

public class UrlNameParserService {
    public String extractNameFromUrl(String url) {
        String[] splitString = url.split("/");
        return splitString[1];
    }
}
