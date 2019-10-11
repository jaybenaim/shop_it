json.extract! shopping_list, :id, :products_id, :user, :listName, :budget, :created_at, :updated_at
json.url shopping_list_url(shopping_list, format: :json)
