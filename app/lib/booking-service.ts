"use client";

import { apiClient } from './api-client';
import { Vehicle } from './vehicle-service';

// Define the Booking type based on Lattis-Nexus backend schema
export interface Booking {
  id: string;
  userId: string;
  vehicleId: string;
  startTime: string;
  endTime: string;
  location?: string;
  participants: number;
  recurringPattern?: string;
  price: number;
  notes?: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  type: 'STANDARD' | 'PREMIUM' | 'ECONOMY';
  createdAt: string;
  updatedAt: string;
  feedback?: string;
  rating?: number;
  vehicle?: Vehicle;
  payment?: Payment;
}

// Define the Payment type
export interface Payment {
  id: string;
  amount: number;
  currency: string;
  status: 'PENDING' | 'COMPLETED' | 'REFUNDED' | 'FAILED';
  bookingId: string;
  createdAt: string;
  updatedAt: string;
}

// Define parameters for booking creation
export interface CreateBookingParams {
  vehicleId: string;
  startTime: string;
  endTime: string;
  location?: string;
  participants?: number;
  type?: 'STANDARD' | 'PREMIUM' | 'ECONOMY';
  notes?: string;
}

/**
 * Service for handling booking-related API calls
 */
export class BookingService {
  /**
   * Get all bookings for the current user
   */
  async getUserBookings(): Promise<Booking[]> {
    return apiClient.get<Booking[]>('/bookings/user');
  }

  /**
   * Get a single booking by ID
   */
  async getBooking(id: string): Promise<Booking> {
    return apiClient.get<Booking>(`/bookings/${id}`);
  }

  /**
   * Create a new booking
   */
  async createBooking(bookingData: CreateBookingParams): Promise<Booking> {
    return apiClient.post<Booking>('/bookings', bookingData);
  }

  /**
   * Cancel a booking by ID
   */
  async cancelBooking(id: string): Promise<Booking> {
    return apiClient.put<Booking>(`/bookings/${id}/cancel`, {});
  }

  /**
   * Check if a vehicle is available for booking in the specified time period
   */
  async checkAvailability(
    vehicleId: string,
    startTime: string,
    endTime: string
  ): Promise<{ available: boolean; conflictingBookings?: Booking[] }> {
    const params = {
      vehicleId,
      startTime,
      endTime,
    };
    
    return apiClient.get<{ available: boolean; conflictingBookings?: Booking[] }>(
      '/bookings/check-availability',
      params
    );
  }

  /**
   * Add a review to a completed booking
   */
  async addReview(bookingId: string, rating: number, feedback?: string): Promise<Booking> {
    return apiClient.put<Booking>(`/bookings/${bookingId}/review`, {
      rating,
      feedback,
    });
  }
}

export const bookingService = new BookingService(); 