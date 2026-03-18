class Animal:
    def __init__(self, name: str, year: int, owner: bool):
        self.name = name
        self.year = year
        self.owner = owner

    def __str__(self):
        return f"Name: {self.name}, year: {self.year}, owner: {self.owner}"

    def get_name(self) -> str:
        return self.name

    def get_year(self) -> int:
        return self.year


class Cat(Animal):
    def __init__(self, name: str, year: int, owner: bool, color: str):
        super().__init__(name, year, owner)
        self.color = color

    def __str__(self):
        return super().__str__() + ", Color: " + self.color
    
    def make_sound(self) -> str:
        return "Meaywwwyy"
    
    def get_color(self) -> str:
        return self.color


class Dog(Animal):
    def __init__(self, name: str, year: int, owner: bool, breed: str):
        super().__init__(name, year, owner)
        self.breed = breed

    def make_sound(self) -> str:
        return "WRAWFFF"
    
    def get_breed(self) -> str:
        return self.breed
    
    def __str__(self):
        return super().__str__() + ", Breed: " + self.breed