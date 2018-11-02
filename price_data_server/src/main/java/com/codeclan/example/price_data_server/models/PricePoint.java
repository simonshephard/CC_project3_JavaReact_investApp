package com.codeclan.example.price_data_server.models;

import javax.persistence.*;

@Entity
@Table(name = "pricepoints")
public class PricePoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "price")
    private String price;

    public PricePoint(String date, String price) {
        this.date = date;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }


}