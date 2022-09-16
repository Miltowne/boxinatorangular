export interface Shipment {
    ShipmentId: number;
    RecieverName: string;
    Weight: number;
    Destination: string;
    BoxColor: string;
        // public ShipmentStatus ShipmentStatus { get; set; }
}

export interface ShipmentCreate {
    RecieverName: string;
    Weight: number;
    Destination: string;
    BoxColor: string;
    ShipmentStatus: number;
    UserId: number;
}

export interface ShipmentCreateGuest {
    RecieverName: string;
    Weight: number;
    Destination: string;
    BoxColor: string;
    ShipmentStatus: number;
    guestUserId: number;
}