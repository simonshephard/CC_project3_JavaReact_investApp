package com.codeclan.example.price_data_server.controllers;

import com.codeclan.example.price_data_server.models.PricePoint;
import com.codeclan.example.price_data_server.repositories.PricePointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/pricePoints")
public class PricePointController {

    @Autowired
    PricePointRepository pricePointRepository;

    @GetMapping(value = "market/{market}")
    public List<PricePoint> getPricePointsByMarket(@PathVariable String market) {
        return pricePointRepository.getPricePointsByMarket(market);
    }

}
