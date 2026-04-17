/*
  Warnings:

  - Added the required column `stock` to the `tb_product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_product" ADD COLUMN     "stock" INTEGER NOT NULL;
