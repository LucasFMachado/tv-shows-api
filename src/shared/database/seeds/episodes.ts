import { hash } from "bcryptjs";

import createConnection from "..";

async function create() {
  const connection = await createConnection();

  await connection.query(`
    INSERT INTO episodes VALUES (1,1,1,'Pilot','2014-10-08 00:00:00',1),
    (2,1,2,'Fastest Man Alive','2014-10-15 00:00:00',1),
    (3,1,3,'Things You Can''t Outrun','2014-10-22 00:00:00',1),
    (4,1,4,'Going Rogue','2014-10-29 00:00:00',1),
    (5,1,5,'Plastique','2014-11-12 01:00:00',1),
    (6,1,1,'Winter is Coming','2011-04-18 01:00:00',2),
	  (7,1,2,'The Kingsroad','2011-04-25 01:00:00',2),
	  (8,1,3,'Lord Snow','2011-05-02 01:00:00',2),
	  (9,1,4,'Cripples, Bastards, and Broken Things','2011-05-09 01:00:00',2),
	  (10,1,5,'The Wolf and the Lion','2011-05-16 01:00:00',2),
    (11,1,1,'Pilot','2012-10-11 00:00:00',3),
    (12,1,2,'Honor Thy Father','2012-10-18 00:00:00',3),
    (13,1,3,'Lone Gunmen','2012-10-25 00:00:00',3),
    (14,1,4,'An Innocent Man','2012-11-01 00:00:00',3),
    (15,1,5,'Damaged','2012-11-08 01:00:00',3);
  `);

  await connection.close();
}

create().then(() => console.log("Tv shows created!"));
