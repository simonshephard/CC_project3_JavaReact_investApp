package com.codeclan.example.price_data_server.repositories;

import com.codeclan.example.price_data_server.models.PricePoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PricePointRepository extends JpaRepository<PricePoint, Long>, PricePointRepositoryCustom {

}
