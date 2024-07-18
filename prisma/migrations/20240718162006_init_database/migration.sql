-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('ACTIVE', 'CANCELLED', 'PENDING');

-- CreateTable
CREATE TABLE "Station" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journey" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "scheduleId" TEXT NOT NULL,

    CONSTRAINT "Journey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JourneyStation" (
    "id" TEXT NOT NULL,
    "stationId" TEXT NOT NULL,
    "journeyId" TEXT NOT NULL,
    "stopOrder" INTEGER NOT NULL,
    "departureTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JourneyStation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarriageClass" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "seatingCapacity" INTEGER NOT NULL,

    CONSTRAINT "CarriageClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JourneyCarriage" (
    "id" TEXT NOT NULL,
    "journeyId" TEXT NOT NULL,
    "carriageClassId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "JourneyCarriage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarriagePrice" (
    "id" TEXT NOT NULL,
    "scheduleId" TEXT NOT NULL,
    "carriageClassId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CarriagePrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "journeyId" TEXT NOT NULL,
    "startingStationId" TEXT NOT NULL,
    "endingStationId" TEXT NOT NULL,
    "carriageClassId" TEXT NOT NULL,
    "amountPaid" DOUBLE PRECISION NOT NULL,
    "ticketNo" TEXT NOT NULL,
    "seatNo" INTEGER NOT NULL,
    "passengerId" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passenger" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,

    CONSTRAINT "Passenger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_ticketNo_key" ON "Booking"("ticketNo");

-- CreateIndex
CREATE UNIQUE INDEX "Passenger_emailAddress_key" ON "Passenger"("emailAddress");

-- AddForeignKey
ALTER TABLE "Journey" ADD CONSTRAINT "Journey_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JourneyStation" ADD CONSTRAINT "JourneyStation_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JourneyStation" ADD CONSTRAINT "JourneyStation_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "Journey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JourneyCarriage" ADD CONSTRAINT "JourneyCarriage_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "Journey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JourneyCarriage" ADD CONSTRAINT "JourneyCarriage_carriageClassId_fkey" FOREIGN KEY ("carriageClassId") REFERENCES "CarriageClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarriagePrice" ADD CONSTRAINT "CarriagePrice_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarriagePrice" ADD CONSTRAINT "CarriagePrice_carriageClassId_fkey" FOREIGN KEY ("carriageClassId") REFERENCES "CarriageClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "Journey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_startingStationId_fkey" FOREIGN KEY ("startingStationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_endingStationId_fkey" FOREIGN KEY ("endingStationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_carriageClassId_fkey" FOREIGN KEY ("carriageClassId") REFERENCES "CarriageClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES "Passenger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
