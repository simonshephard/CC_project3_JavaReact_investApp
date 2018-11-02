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

        PricePoint pricePoint1 = new PricePoint("20181101", "1000.00");
        PricePoint pricePoint2 = new PricePoint("20181102", "1010.10");

        pricePointRepository.save(pricePoint1);
        pricePointRepository.save(pricePoint2);

    }



}
