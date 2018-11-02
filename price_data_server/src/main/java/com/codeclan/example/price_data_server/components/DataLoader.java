package com.codeclan.example.price_data_server.components;

import com.codeclan.example.price_data_server.models.PricePoint;
import com.codeclan.example.price_data_server.repositories.PricePointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PricePointRepository pricePointRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        PricePoint pricePoint1 = new PricePoint("20181001", "1000.10");
        PricePoint pricePoint2 = new PricePoint("20181002", "1010.11");
        PricePoint pricePoint3 = new PricePoint("20181003", "1020.12");
        PricePoint pricePoint4 = new PricePoint("20181004", "1030.13");
        PricePoint pricePoint5 = new PricePoint("20181005", "1040.14");
        PricePoint pricePoint6 = new PricePoint("20181006", "1050.15");
        PricePoint pricePoint7 = new PricePoint("20181007", "1060.16");
        PricePoint pricePoint8 = new PricePoint("20181008", "1070.17");
        PricePoint pricePoint9 = new PricePoint("20181009", "1080.18");
        PricePoint pricePoint10 = new PricePoint("20181010", "1090.19");

        pricePointRepository.save(pricePoint1);
        pricePointRepository.save(pricePoint2);
        pricePointRepository.save(pricePoint3);
        pricePointRepository.save(pricePoint4);
        pricePointRepository.save(pricePoint5);
        pricePointRepository.save(pricePoint6);
        pricePointRepository.save(pricePoint7);
        pricePointRepository.save(pricePoint8);
        pricePointRepository.save(pricePoint9);
        pricePointRepository.save(pricePoint10);

    }



}
