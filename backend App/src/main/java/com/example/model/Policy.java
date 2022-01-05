package com.example.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
@Getter
@Setter
@NoArgsConstructor
public class Policy {
    private int id;
    private String policyName;
    private int policyId;
    private int agreement;
    private int voted;
    private String policyDescription;
    private int policyProvisional;
    private Timestamp policyLastEditedAt;
}
