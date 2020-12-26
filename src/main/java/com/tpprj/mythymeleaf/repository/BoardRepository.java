package com.tpprj.mythymeleaf.repository;

import com.tpprj.mythymeleaf.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
