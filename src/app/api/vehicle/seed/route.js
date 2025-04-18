import { db } from "@/lib/prisma";

export async function POST(req) {
    try {
        const vehicles = [
          {
            imageUrl: "/car1.svg",
            name: "BMW M4",
            brandName: "BMW",
            passengerCapacity: 4,
            gearType: "AUTOMATIC",
            airConditioning: true,
            doors: 4,
            location: "rajkot",
            rating: 4.8,
            price: 1000,
            type: "CAR",
            vehicleNumber: "GJ12AB1234",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://i.pinimg.com/736x/9e/ca/e5/9ecae5a5505b76b0f41b69eae06be1f9.jpg",
            name: "Mahindra Thar",
            brandName: "Mahindra",
            passengerCapacity: 4,
            gearType: "MANUAL",
            airConditioning: true,
            location: "porbandar",
            doors: 3,
            rating: 4.5,
            price: 5000,
            type: "SUV",
            vehicleNumber: "GJ14CD5678",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://wallpapers.com/images/hd/white-mahindra-bolero-side-view-v56o5ghhb4nm6s7r-2.png",
            name: "Mahindra Bolero",
            brandName: "Mahindra",
            passengerCapacity: 7,
            gearType: "MANUAL",
            airConditioning: true,
            doors: 5,
            location: "junagadh",
            rating: 4.9,
            price: 4000,
            type: "SUV",
            vehicleNumber: "GJ10EF9012",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWGnI_AZmR9GFc4atD5_7M6MqRMG4WZIg70U5DkRdscl_-rA3Qz6OFmzpVXHnuaDzzpI&usqp=CAU",
            name: "Mahindra Scorpio",
            brandName: "Mahindra",
            passengerCapacity: 5,
            gearType: "AUTOMATIC",
            airConditioning: true,
            location: "surat",
            doors: 4,
            rating: 4.6,
            price: 5500,
            type: "SUV",
            vehicleNumber: "GJ08GH3456",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh-qiYNEhQn_Xy2BTTfwEROvoNGSGnSYmFQ&s",
            name: "Jeep Wrangler",
            brandName: "Jeep",
            passengerCapacity: 5,
            gearType: "MANUAL",
            airConditioning: false,
            doors: 4,
            location: "surat",
            rating: 4.3,
            price: 7000,
            type: "SUV",
            vehicleNumber: "GJ06IJ7890",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl: "https://pngimg.com/d/toyota_PNG1917.png",
            name: "Toyota Corolla",
            brandName: "Toyota",
            passengerCapacity: 5,
            gearType: "AUTOMATIC",
            airConditioning: true,
            location: "rajkot",
            doors: 4,
            rating: 4.5,
            price: 4000,
            type: "SEDAN",
            vehicleNumber: "GJ02KL2345",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://www.pngplay.com/wp-content/uploads/13/Honda-Civic-EG-Hatch-Transparent-File.png",
            name: "Honda Civic",
            brandName: "Honda",
            passengerCapacity: 5,
            gearType: "MANUAL",
            airConditioning: true,
            location: "rajkot",
            doors: 4,
            rating: 4.3,
            price: 3800,
            type: "SEDAN",
            vehicleNumber: "GJ05MN6789",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl: "https://pngimg.com/d/mustang_PNG30.png",
            name: "Ford Mustang",
            brandName: "Ford",
            passengerCapacity: 4,
            gearType: "AUTOMATIC",
            airConditioning: true,
            doors: 2,
            location: "porbandar",
            rating: 4.8,
            price: 10000,
            type: "CAR",
            vehicleNumber: "GJ01OP1234",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5asRqXLs97s7mc8_dpyFqdBgHiPgPivZQg&s",
            name: "Tata Ace",
            brandName: "Tata",
            passengerCapacity: 2,
            gearType: "MANUAL",
            airConditioning: false,
            doors: 2,
            rating: 4.2,
            location: "junagadh",
            price: 3500,
            type: "TRUCK",
            vehicleNumber: "GJ03QR5678",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://i.pinimg.com/736x/2a/c3/dd/2ac3dd76c89d2b38ff4b3672740cd25f.jpg",
            name: "Royal Enfield Classic 350",
            brandName: "Royal Enfield",
            passengerCapacity: 2,
            gearType: "MANUAL",
            airConditioning: false,
            doors: 0,
            rating: 4.7,
            location: "porbandar",
            price: 1500,
            type: "BIKE",
            vehicleNumber: "GJ07ST9012",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://cdn.bikedekho.com/processedimages/ola-electric/2025-s1-pro/source/2025-s1-pro679ce24f98f96.jpg?imwidth=880",
            name: "Ola S1 Pro",
            brandName: "Ola",
            passengerCapacity: 2,
            gearType: "AUTOMATIC",
            airConditioning: false,
            doors: 0,
            location: "bhavnagar",
            rating: 4.6,
            price: 1600,
            type: "ELECTRIC",
            vehicleNumber: "GJ11UV3456",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://c4.wallpaperflare.com/wallpaper/60/647/828/hyundai-elantra-avante-side-view-wallpaper-thumb.jpg",
            name: "Hyundai Elantra",
            brandName: "Hyundai",
            passengerCapacity: 5,
            gearType: "AUTOMATIC",
            airConditioning: true,
            doors: 4,
            rating: 4.6,
            price: 4500,
            location: "bhavnagar",
            type: "SEDAN",
            vehicleNumber: "GJ09AB1234",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://www.pngplay.com/wp-content/uploads/13/BMW-3-Series-2019-Transparent-Images.png",
            name: "BMW 3 Series",
            brandName: "BMW",
            passengerCapacity: 5,
            gearType: "AUTOMATIC",
            airConditioning: true,
            doors: 4,
            rating: 4.7,
            location: "junagadh",
            price: 9000,
            type: "LUXURY",
            vehicleNumber: "GJ07CD5678",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://as1.ftcdn.net/jpg/05/70/87/04/1000_F_570870490_e4qBslQl1elGp2BuaoUDb2ajdqt1ncDn.jpg",
            name: "Mercedes-Benz C-Class",
            brandName: "Mercedes-Benz",
            passengerCapacity: 5,
            gearType: "AUTOMATIC",
            airConditioning: true,
            doors: 4,
            rating: 4.8,
            price: 10000,
            location: "rajkot",
            type: "LUXURY",
            vehicleNumber: "GJ05EF9012",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn19Ji9HXyC65tXqHW_8ivNHQT4BV6dO8CAQ&s",
            name: "Audi A4",
            brandName: "Audi",
            passengerCapacity: 5,
            gearType: "AUTOMATIC",
            airConditioning: true,
            doors: 4,
            rating: 4.6,
            location: "junagadh",
            price: 9500,
            type: "LUXURY",
            vehicleNumber: "GJ03GH3456",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
          {
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4UvQo6nRNuEUdwjHyA9OULFFb6mAXeR75Q&s",
            name: "Nissan Versa",
            brandName: "Nissan",
            passengerCapacity: 5,
            gearType: "MANUAL",
            airConditioning: true,
            doors: 4,
            location: "surat",
            rating: 4.2,
            price: 3200,
            type: "CAR",
            vehicleNumber: "GJ11IJ7890",
            ownerId: "7a910fcb-ef82-4489-bf6a-0f37b80fd8b3",
          },
        ];
        
        
        await db.vehicle.createMany({
            data: vehicles,
            skipDuplicates: true, // Avoid inserting duplicates
        });

        return Response.json({ message: "Vehicles seeded successfully!" }, { status: 201 });
    } catch (error) {
        console.error("Seeding error:", error);
        return Response.json({ message: "Failed to seed vehicles", error }, { status: 500 });
    }
}
