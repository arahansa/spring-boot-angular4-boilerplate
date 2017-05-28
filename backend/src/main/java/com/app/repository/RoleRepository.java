package com.app.repository;

import com.app.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by jarvis on 2017. 5. 28..
 */

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
