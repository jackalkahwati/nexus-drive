"use client";

import { apiClient } from './api-client';

// Define the Vehicle type based on Lattis-Nexus backend schema
export interface Vehicle {
  id: string;
  name: string;
  type: string;
  status: string;
  mileage: number;
  fleetId?: string;
  zoneId?: string;
  createdAt: string;
  updatedAt: string;
}

// Define parameters for vehicle searches
export interface VehicleSearchParams {
  type?: string;
  status?: string;
  zoneId?: string;
  fleetId?: string;
}

/**
 * Service for handling vehicle-related API calls
 */
export class VehicleService {
  /**
   * Get all vehicles with optional filtering
   */
  async getVehicles(params?: VehicleSearchParams): Promise<Vehicle[]> {
    return apiClient.get<Vehicle[]>('/vehicles', params as Record<string, string>);
  }

  /**
   * Get a single vehicle by ID
   */
  async getVehicle(id: string): Promise<Vehicle> {
    return apiClient.get<Vehicle>(`/vehicles/${id}`);
  }

  /**
   * Get available vehicles based on search criteria
   */
  async getAvailableVehicles(
    location?: string,
    startDate?: string,
    endDate?: string,
    vehicleType?: string
  ): Promise<Vehicle[]> {
    const params: Record<string, string> = {
      status: 'AVAILABLE',
    };

    if (location) params.zoneId = location;
    if (vehicleType) params.type = vehicleType;
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;

    return apiClient.get<Vehicle[]>('/vehicles/available', params);
  }

  /**
   * Get popular vehicle types
   */
  async getPopularVehicleTypes(): Promise<{ type: string; count: number }[]> {
    return apiClient.get<{ type: string; count: number }[]>('/vehicles/popular-types');
  }
}

export const vehicleService = new VehicleService(); 