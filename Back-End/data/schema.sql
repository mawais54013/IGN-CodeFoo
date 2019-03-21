-- copy and paste the below schema to database
DROP DATABASE IF EXISTS ignDB;
CREATE database ignDB;

USE ignDB;
-- data stored as int and text 
-- also data is assigned number and all information from the csv file
CREATE TABLE news(
  position INT NOT NULL,
  content_id VARCHAR(1000) NULL,
  content_type VARCHAR(100) NULL,
  title VARCHAR(100) NULL,
  headline VARCHAR(100) NULL,
  describe1 VARCHAR(1000) NULL,
  publish_date VARCHAR(1000) NULL,
  slug VARCHAR(1000) NULL,
  describe2 VARCHAR(1000) NULL,
  effect VARCHAR(100) NULL,
  duration1 VARCHAR(1000) NULL,
  video_series VARCHAR(100) NULL,
  author_1 VARCHAR(100) NULL,
  author_2 VARCHAR(100) NULL,
  tag_1 VARCHAR(100) NULL,
  tag_2 VARCHAR(100) NULL,
  tag_3 VARCHAR(100) NULL,
  thumb_url VARCHAR(2083) NULL,
  thumb_size VARCHAR(100) NULL,
  thumb_width VARCHAR(100) NULL,
  thumb_height VARCHAR(100) NULL,
  thumb_url2 VARCHAR(2083) NULL,
  thumb_size2 VARCHAR(100) NULL,
  thumb_width2 VARCHAR(100) NULL,
  thumb_height2 VARCHAR(100) NULL,
  thumb_url3 VARCHAR(2083) NULL,
  thumb_size3 VARCHAR(100) NULL,
  thumb_width3 VARCHAR(100) NULL,
  thumb_height3 VARCHAR(100) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM news;
