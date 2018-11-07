package com.codeclan.example.price_data_server.components;

import com.codeclan.example.price_data_server.models.PricePoint;

import java.util.Comparator;

public class PricePointDateSorter implements Comparator<PricePoint> {

    public int compare(PricePoint one, PricePoint another){
        int compareVal = one.getDate().compareTo(another.getDate());
        int returnVal = 0;
        if(compareVal < 0){
            returnVal =  -1;
        }else if(compareVal == 0){
            returnVal =  0;
        }else if(compareVal > 0){
            returnVal =  1;
        }
        return returnVal;
    }

}