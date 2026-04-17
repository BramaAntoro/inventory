-- CreateTable
CREATE TABLE "tb_users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "tb_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_jwt_token" (
    "token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "tb_jwt_token_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "tb_product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "tb_product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_jwt_token" ADD CONSTRAINT "tb_jwt_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_product" ADD CONSTRAINT "tb_product_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
