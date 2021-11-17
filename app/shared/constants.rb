module Constants
    class RegExp
        EMAIL = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

        def self.validate_email(email)
            return EMAIL.match(email) ? true : false
        end
    end
end