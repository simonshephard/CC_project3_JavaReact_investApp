package com.codeclan.example.price_data_server.repositories;

import com.codeclan.example.price_data_server.models.PricePoint;

import java.util.List;

public interface PricePointRepositoryCustom {

    public List<PricePoint> getPricePointsByMarket(String market);

}
