package com.example.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
public class Politician {
    private Long ID;
    private String lastname;
    private String firstname;
    private Long latestMemberId;
    private Long Rebellions;
    private String Eletorate;
    private Long Votes;
    private House house;
    private Party party;


}
