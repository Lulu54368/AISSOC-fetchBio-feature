package com.example.mapper;

import com.example.model.Profile;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ProfileMapper {
    @Select("select id, firstname, lastname from politics")
    List<Profile> findAll();
}
