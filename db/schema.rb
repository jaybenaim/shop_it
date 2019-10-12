# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_12_043925) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "aisles", force: :cascade do |t|
    t.integer "number"
    t.bigint "store_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["store_id"], name: "index_aisles_on_store_id", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.bigint "aisle_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["aisle_id"], name: "index_categories_on_aisle_id", unique: true
  end

  create_table "lists", force: :cascade do |t|
    t.string "user"
    t.string "name"
    t.float "budget"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "lists_products", id: false, force: :cascade do |t|
    t.bigint "list_id", null: false
    t.bigint "product_id", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.float "price"
    t.text "description"
    t.text "ingrediants"
    t.bigint "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "shopping_lists_id"
    t.index ["category_id"], name: "index_products_on_category_id"
    t.index ["shopping_lists_id"], name: "index_products_on_shopping_lists_id"
  end

  create_table "shopping_lists", force: :cascade do |t|
    t.bigint "products_id"
    t.bigint "lists_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["lists_id"], name: "index_shopping_lists_on_lists_id"
    t.index ["products_id"], name: "index_shopping_lists_on_products_id"
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "aisles", "stores"
  add_foreign_key "categories", "aisles"
  add_foreign_key "products", "categories"
  add_foreign_key "shopping_lists", "lists", column: "lists_id"
  add_foreign_key "shopping_lists", "products", column: "products_id"
end
