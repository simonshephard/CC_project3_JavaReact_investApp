package com.codeclan.example.price_data_server.components;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class CSVParser {

    public static ArrayList<String[]> getData(String path) {

        ArrayList<String[]> result = new ArrayList<>();

        try {
            File file = new File(path);
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] lineArray = line.split(",");
                result.add(lineArray);
            }
            scanner.close();

        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        return result;

    }

}
