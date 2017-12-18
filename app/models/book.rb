class Book < ApplicationRecord
  has_many :borrow_books
  has_many :comments
  has_many :user_ratings

  has_many :relationships, as: :targetable
  has_many :users, through: :relationships, source_type: User.name, source: :ownerable
  has_many :categories, through: :relationships, source_type: Category.name, source: :ownerable
  has_many :authors, through: :relationships, source_type: Author.name, source: :ownerable

  belongs_to :publisher

  mount_uploader :cover_image, ImageUploader
  mount_uploader :image, ImageUploader

  scope :search_book, -> book_name, author_name, category_name do
    where("books.name LIKE ?","%#{book_name}%")
    .joins(:authors).where("authors.name LIKE ?", "%#{author_name}%")
    .joins(:categories).where("categories.name LIKE ?", "%#{category_name}%")
  end

  rails_admin do
    exclude_fields :categories, :relationships, :users, :borrow_books, :comments, :user_ratings, :authors
  end
end
