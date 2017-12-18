class ItemsController < ApplicationController
	def index
		@books = Book.all
	end

	def show
	end

	def search
		binding.pry
		@books = Book.search_book(params[:search][:name], params[:search][:author], params[:search][:category])
		response do |format|
			format.js
		end
	end
end
