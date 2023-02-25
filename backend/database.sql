-- CREATE DATABASE insurancedata;

DROP TABLE IF EXISTS Employee;
CREATE TABLE Employee (
 EmployeeID int PRIMARY KEY NOT NULL,
  Password varchar(20) NOT NULL,
  FirstName varchar(50) NOT NULL,
  LastName varchar(50) NOT NULL,
  Age int NOT NULL
);

DROP TABLE IF EXISTS InsurancePolicies;
CREATE TABLE InsurancePolicies (
  InsuranceID int PRIMARY KEY NOT NULL,
  EmployeeID int NOT NULL REFERENCES Employee (EmployeeID) ON DELETE CASCADE ON UPDATE CASCADE,
  InsuranceType varchar(100) NOT NULL,
  PolicyStartDate varchar(255) NOT NULL,
  PolicyTerm varchar(100) NOT NULL,
  PolicyEndDate varchar(255) NOT NULL,
  ClaimLimit float NOT NULL,
  RemainingClaimLimit float NOT NULL
);

DROP TABLE IF EXISTS InsuranceClaims;
CREATE TABLE InsuranceClaims (
  ClaimID int PRIMARY KEY NOT NULL REFERENCES InsurancePolicies(InsuranceId) ON DELETE CASCADE ON UPDATE CASCADE,
  InsuranceID int NOT NULL,
  FirstName varchar(50) NOT NULL,
  LastName varchar(50) NOT NULL,
  ExpenseDate varchar(255) NOT NULL,
  Amount float NOT NULL,
  Purpose varchar(255) NOT NULL,
  FollowUp bit(1) NOT NULL,
  PreviousClaimID int DEFAULT NULL,
  Status varchar(20) NOT NULL,
  LastEditedClaimDate varchar(255) NOT NULL
);

