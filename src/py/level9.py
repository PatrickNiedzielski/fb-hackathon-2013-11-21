# Learn Python -- level 9 logic
# Copyright (C) 2013 Cornell FB Hackathon Team.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

player1._position = [0, 10];
_world.grid[player1._position[1]][player1._position[0]] = player1
player2._position = [18, 0];
_world.grid[player2._position[1]][player2._position[0]] = player2

walls = []
for i in range(0, 11):
    walls.append(Wall([1, i]))
for i in range(2, 16):
    walls.append(Wall([i, 1]))
for i in range(2, 8):
    walls.append(Wall([15, i]))
for i in range(5, 15):
    walls.append(Wall([i, 7]))
for i in range(5, 7):
    walls.append(Wall([5, i]))
for i in range(6, 14):
    walls.append(Wall([i, 5]))
for i in range(3, 5):
    walls.append(Wall([13, i]))
for i in range(3, 13):
    walls.append(Wall([i, 3]))
for i in range(4, 10):
    walls.append(Wall([3, i]))
for i in range(4, 18):
    walls.append(Wall([i, 9]))
for i in range(0, 9):
    walls.append(Wall([17, i]))

def at_end():
    if (player1._position[0] != 12 or
        player1._position[1] != 4  or
        player2._position[0] != 6  or
        player2._position[1] != 6):
        raise Exception("Failure")
    
        
