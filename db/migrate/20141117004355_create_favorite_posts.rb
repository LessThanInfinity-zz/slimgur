class CreateFavoritePosts < ActiveRecord::Migration
  def change
    create_table :favorite_posts do |t|
      t.references :post, index: true
      t.references :user, index: true

      t.timestamps
    end
  end
end
