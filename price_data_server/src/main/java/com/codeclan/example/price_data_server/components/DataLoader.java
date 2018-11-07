package com.codeclan.example.price_data_server.components;

import com.codeclan.example.price_data_server.models.PricePoint;
import com.codeclan.example.price_data_server.repositories.PricePointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import java.util.ArrayList;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PricePointRepository pricePointRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        String location = "../20181102/";

        String filename1 = "EURUSD(£)1440.csv";
        String market1 = "EURUSD";
        addDataFromCSVFile(location, filename1, market1);

        String filename2 = "FTSE100(£)1440.csv";
        String market2 = "FTSE100";
        addDataFromCSVFile(location, filename2, market2);

        String filename3 = "SPX500(£)1440.csv";
        String market3 = "SPX500";
        addDataFromCSVFile(location, filename3, market3);

        String filename4 = "EUSTX50(£)1440.csv";
        String market4 = "EUSTX50";
        addDataFromCSVFile(location, filename4, market4);

        String filename5 = "JPN225(£)1440.csv";
        String market5 = "JPN225";
        addDataFromCSVFile(location, filename5, market5);

    }

    public void addDataFromCSVFile(String location, String filename, String market) {

        String path = location + filename;
        ArrayList<String[]> priceData = CSVParser.getData(path);
        for (String[] lineArray : priceData) {
            PricePoint pricePoint = new PricePoint(market, lineArray[0], lineArray[1], lineArray[2], lineArray[3], lineArray[4], lineArray[5], lineArray[6]);
            pricePointRepository.save(pricePoint);
        }

    }


}
