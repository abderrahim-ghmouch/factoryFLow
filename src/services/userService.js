import bcrypt from 'bcryptjs'

import userRepository from '../repositories/userRepository.js'



 export async function createUser({ name, email, password, role }, createdById) {
    // Check email uniqueness

    const existing = await userRepository.findByEmail(email)

    if (existing) {

      const error = new Error('Email already in use')

      error.statusCode = 409

      throw error

    }


    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await userRepository.create({

      name,

      email,

      password: hashedPassword,
      role,
      createdBy: createdById
    })

    return user
  }

  export async function getProfile(userId) {

    const user = await userRepository.findById(userId)

    if (!user) {

      const error = new Error('User not found')
      error.statusCode = 404
      throw error
    }
    return user
  }

export async function listUsers() {
    
    return userRepository.findAll()
  }





