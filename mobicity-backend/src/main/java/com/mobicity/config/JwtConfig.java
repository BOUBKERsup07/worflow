package com.mobicity.config;

import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;

@Configuration
public class JwtConfig {
    @Value("${jwt.expiration}")
    private Long jwtExpiration;

    @Value("${jwt.secret}")
    private String jwtSecret;
    
    @Bean
    public SecretKey secretKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
    }

    public Long getJwtExpiration() {
        return jwtExpiration;
    }
    
    public String getSecretKey() {
        return jwtSecret;
    }
}