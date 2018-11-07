package com.codeclan.example.price_data_server.repositories;

import com.codeclan.example.price_data_server.components.PricePointDateSorter;
import com.codeclan.example.price_data_server.models.PricePoint;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;

public class PricePointRepositoryImpl implements PricePointRepositoryCustom {

    @Autowired
    EntityManager entityManager;


    @Transactional
    public List<PricePoint> getPricePointsByMarket(String market){

        List<PricePoint> pricePoints = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(PricePoint.class);
            cr.add(Restrictions.eq("market", market));
            pricePoints = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }

        Collections.sort(pricePoints, new PricePointDateSorter());

        return pricePoints;
    }


}
