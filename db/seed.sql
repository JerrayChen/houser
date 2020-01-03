create table houses(
  id serial primary key,
  name varchar(30),
  address varchar(100),
  city varchar(100),
  state varchar(2),
  zip integer
);

alter table houses
add img text,
add mortgage decimal,
add rent decimal;


insert into houses(name, address, city, state, zip, img, mortgage, rent)
values('NewHouse','567 This Rd.','Dallas','TX',78912,'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',3000,3000),
('OldHouse','765 This Rd.','Dallas','TX',78913,'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',1234,3322),
('NormalHouse','765 That Rd.','LA','CA',90123,'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',1234,3322);
