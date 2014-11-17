class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
      t.references :post, index: true
      t.string :image_file_name
      t.string :image_content_type
      t.integer :image_file_size
      t.datetime :image_updated_at

      t.timestamps
    end
  end
end
