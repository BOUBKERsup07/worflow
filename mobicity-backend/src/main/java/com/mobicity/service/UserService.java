package com.mobicity.service;

import com.mobicity.model.User;
import com.mobicity.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé avec l'email: " + email));
    }
    
    public User updateUser(String email, User updatedUserData) {
        User existingUser = findByEmail(email);
        
        // Mettre à jour les champs modifiables
        if (updatedUserData.getFirstName() != null) {
            existingUser.setFirstName(updatedUserData.getFirstName());
        }
        
        if (updatedUserData.getLastName() != null) {
            existingUser.setLastName(updatedUserData.getLastName());
        }
        
        if (updatedUserData.getPhoneNumber() != null) {
            existingUser.setPhoneNumber(updatedUserData.getPhoneNumber());
        }
        
        // Ne pas permettre de modifier l'email car c'est l'identifiant principal
        // Ne pas permettre de modifier le mot de passe via cette méthode (utiliser une méthode dédiée)
        
        // Sauvegarder les modifications
        return userRepository.save(existingUser);
    }
}
