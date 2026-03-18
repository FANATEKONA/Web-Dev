from models import Cat, Dog

def main():
    cat = Cat("Vova", 1, True, "White")
    dog = Dog("Nevova", 2, False, "tRex")

    animals = [cat, dog]

    for animal in animals:
        print(f"\n{animal}")
        print(f"Sound: {animal.make_sound()}")
        
        if isinstance(animal, Cat):
            print(f"Color: {animal.get_color()}")
        elif isinstance(animal, Dog):
            print(f"Breed: {animal.get_breed()}")

if __name__ == "__main__":
    main()