-- INSERT INTO Employee VALUES (58001001,'iLoveTT!23','Irene','Lim',27),(58001002,'DBSB#stB4nk','Mary','Lee',35),(58001003,'JoinSEED20@3','John','Tan',38),(58001004,'LiveM0reb$nk1ess','Martin','Ong',43),(58001005,'J4vaPyth0nSq!','Sean','Chia',52);
DROP TABLE IF EXISTS InsuranceClaims;
CREATE TABLE InsuranceClaims (
  ClaimID int PRIMARY KEY NOT NULL,
  InsuranceID int NOT NULL REFERENCES InsurancePolicies(InsuranceId) ON DELETE CASCADE ON UPDATE CASCADE,
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

INSERT INTO Employee VALUES (58001001,'iLoveTT!23','Irene','Lim',27);
INSERT INTO Employee VALUES (58001002,'DBSB#stB4nk','Mary','Lee',35);
INSERT INTO Employee VALUES (58001003,'JoinSEED20@3','John','Tan',38);
INSERT INTO Employee VALUES (58001004,'LiveM0reb$nk1ess','Martin','Ong',43);
INSERT INTO Employee VALUES (58001005,'J4vaPyth0nSq!','Sean','Chia',52);

INSERT INTO InsurancePolicies VALUES (1005,58001002,'Personal Accident','2022-03-31T00:00:00+08:00','12 months','2023-03-31T00:00:00+08:00',1000,400),
(1006,58001002,'Housing','2022-03-31T00:00:00+08:00','24 months','2024-03-31T00:00:00+08:00',50000,50000),
(1007,58001002,'Car','2022-03-31T00:00:00+08:00','24 months','2024-03-31T00:00:00+08:00',25000,20000),
(1008,58001003,'Personal Accident','2022-05-31T00:00:00+08:00','3 months','2022-08-31T00:00:00+08:00',1000,800),
(1009,58001004,'Personal Accident','2022-05-31T00:00:00+08:00','12 months','2023-05-31T00:00:00+08:00',5000,4600),
(1010,58001004,'Housing','2022-05-31T00:00:00+08:00','24 months','2024-05-31T00:00:00+08:00',50000,50000),
(1011,58001003,'Car','2022-07-31T00:00:00+08:00','12 months','2023-07-31T00:00:00+08:00',25000,25000),
(1012,58001004,'Car','2022-09-30T00:00:00+08:00','24 months','2024-09-30T00:00:00+08:00',25000,25000),
(1013,58001001,'Housing','2022-11-30T00:00:00+08:00','24 months','2024-11-30T00:00:00+08:00',50000,50000),
(1014,58001005,'Travel','2023-01-31T00:00:00+08:00','1 month','2023-02-28T00:00:00+08:00',1000,1000),
(1015,58001005,'Housing','2023-01-31T00:00:00+08:00','24 months','2025-01-31T00:00:00+08:00',50000,50000),
(1016,58001001,'Travel','2023-01-31T00:00:00+08:00','1 month','2023-02-28T00:00:00+08:00',1000,900);


INSERT INTO InsuranceClaims VALUES (2010,1009,'Martin','Ong','2022-07-14T08:00:00+08:00',100,'Dentist',(CAST(0 AS bit)),NULL,'Approved','2022-07-15T12:22:45+08:00')
,(2011,1008,'John','Tan','2022-08-15T08:00:00+08:00',100,'Outpatient Claim',(CAST(0 AS bit)),NULL,'Approved','2022-08-16T19:35:53+08:00'),
(2012,1005,'Mary','Lee','2022-08-16T08:00:00+08:00',200,'Specialist Visit',(CAST(0 AS bit)),NULL,'Approved','2022-08-17T12:28:46+08:00'),
(2013,1007,'Mary','Lee','2022-08-18T08:00:00+08:00',5000,'Car Repairs',(CAST(0 AS bit)),NULL,'Approved','2022-08-19T11:16:32+08:00'),
(2014,1008,'John','Tan','2022-08-20T08:00:00+08:00',100,'Outpatient Claim',(CAST(0 AS bit)),NULL,'Approved','2022-08-29T16:42:51+08:00'),
(2015,1009,'Martin','Ong','2022-09-02T08:00:00+08:00',100,'Outpatient Claim',(CAST(0 AS bit)),NULL,'Rejected','2022-09-03T10:30:00+08:00'),
(2016,1008,'John','Tan','2022-09-04T08:00:00+08:00',100,'Outpatient Claim',(CAST(0 AS bit)),NULL,'Rejected','2022-09-05T13:25:29+08:00'),
(2017,1005,'Mary','Lee','2022-10-08T08:00:00+08:00',200,'Specialist Visit Follow Up',(CAST(1 AS bit)),2013,'Approved','2022-10-09T13:08:24+08:00'),
(2018,1011,'John','Tan','2022-10-10T08:00:00+08:00',3000,'Aircon Repair',(CAST(0 AS bit)),NULL,'Pending','2022-10-15T17:45:52+08:00'),
(2019,1009,'Martin','Ong','2022-10-26T08:00:00+08:00',100,'Dentist',(CAST(0 AS bit)),NULL,'Approved','2022-10-28T13:08:24+08:00'),
(2020,1009,'Martin','Ong','2023-01-03T08:00:00+08:00',100,'Outpatient Claim',(CAST(0 AS bit)),NULL,'Approved','2023-01-05T12:53:04+08:00'),
(2021,1011,'John','Tan','2022-12-20T08:00:00+08:00',2000,'Engine Repair',(CAST(0 AS bit)),NULL,'Approved','2023-01-06T11:24:32+08:00'),
(2022,1005,'Mary','Lee','2023-01-09T08:00:00+08:00',200,'Specialist Visit Follow Up',(CAST(1 AS bit)),2019,'Approved','2023-01-09T17:23:56+08:00'),
(2023,1016,'Irene','Lim','2023-02-11T08:00:00+08:00',100,'Overseas Injury',(CAST(0 AS bit)),NULL,'Approved','2023-02-16T15:32:24+08:00'),
(2024,1009,'Martin','Ong','2023-02-23T08:00:00+08:00',100,'Dentist',(CAST(0 AS bit)),NULL,'Pending','2023-02-25T17:33:58+08:00'),
(2025,1015,'Sean','Chia','2023-02-28T08:00:00+08:00',10000,'Repairs Due to Fire From Neighbor',(CAST(0 AS bit)),NULL,'Pending','2023-03-01T10:00:00+08:00'),
(2026,1009,'Martin','Ong','2023-03-10T08:00:00+08:00',100,'Outpatient Claim',(CAST(0 AS bit)),NULL,'Approved','2023-03-11T00:00:00+08:00'),
(2027,1016,'Irene','Lim','2023-02-11T08:00:00+08:00',200,'Lost aggage',(CAST(0 AS bit)),NULL,'Pending','2023-02-25T17:39:42+08:00'),
(2028,1016,'Irene','Lim','2023-02-28T08:00:00+08:00',50,'Overseas Injury Follow Up Treatment',(CAST(1 AS bit)),2023,'Pending','2023-02-28T17:33:58+08:00');
