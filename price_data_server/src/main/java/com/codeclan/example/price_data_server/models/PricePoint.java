package com.codeclan.example.price_data_server.models;

import javax.persistence.*;

@Entity
@Table(name = "pricepoints")
public class PricePoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private String price;

    public PricePoint(String name, String price) {
        this.name = name;
        this.price = price;
    }

    public PricePoint() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }


}