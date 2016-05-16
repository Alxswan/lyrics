class CreateLyrics < ActiveRecord::Migration
  def change
    create_table :lyrics do |t|

      t.timestamps null: false
    end
  end
end
