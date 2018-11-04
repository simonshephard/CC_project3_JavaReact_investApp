package com.codeclan.example.price_data_server.components;

import java.io.File;
import java.io.FileNotFoundException;
//import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class CSVParser {

    public static ArrayList<String[]> getData(String path) {

        ArrayList<String[]> result = new ArrayList<>();

        try {
            File file = new File(path);
            Scanner scanner = new Scanner(file);
            // scanner.useDelimiter(",");
            // while (scanner.hasNext()) {
            //     System.out.print(scanner.next()+"|");
            // }
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] lineArray = line.split(",");
                result.add(lineArray);
                // System.out.print(Arrays.toString(lineArray));
                // System.out.print("\n");
            }
            scanner.close();

        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        return result;

    }

}
