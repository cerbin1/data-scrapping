    CREATE TABLE products (
        id bigint  NOT NULL,
        name text  NULL,
        description text  NULL,
        rating double precision  NULL,
        price double precision  NULL,
        PRIMARY KEY (id));

    CREATE TABLE reviews(
        id bigint  NOT NULL,
        reviewerUsername text  NULL,
        rating double precision  NULL,
        upvotes smallint  NULL,
        downvotes smallint  NULL,
        date date  NULL,
        reviewedAfter bigint  NULL,
        content text  NULL,
        reviewerBoughtProduct boolean  NULL,
        productId bigint  NOT NULL,
    	PRIMARY KEY (id),
    	FOREIGN KEY (productId) REFERENCES products(id));


    CREATE TABLE products_temp (
        id bigint  NOT NULL,
        name text  NULL,
        description text  NULL,
        rating double precision  NULL,
        price double precision  NULL,
        PRIMARY KEY (id));

    CREATE TABLE reviews_extract(
        id bigint  NOT NULL,
        avatar text  NULL,
        username text  NULL,
        rating text  NULL,
        upvotes text  NULL,
        downvotes text  NULL,
        date text  NULL,
        reviewedAfter text  NULL,
        content text  NULL,
        reviewerBoughtProduct text  NULL,
        productId bigint  NOT NULL,
        PRIMARY KEY (id));

    CREATE TABLE reviews_transform(
        id bigint  NOT NULL,
        avatar text  NULL,
        username text  NULL,
        rating text  NULL,
        upvotes text  NULL,
        downvotes text  NULL,
        date text  NULL,
        reviewedAfter text  NULL,
        content text  NULL,
        reviewerBoughtProduct text  NULL,
        productId bigint  NOT NULL,
        PRIMARY KEY (id));
