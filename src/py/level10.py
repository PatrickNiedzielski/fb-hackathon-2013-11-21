# Learn Python -- level 10 logic
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

player1._position = [3, 10];
_world.grid[player1._position[1]][player1._position[0]] = player1
player2._position = [7, 1];
_world.grid[player2._position[1]][player2._position[0]] = player2

walls = []
for i in range(0, 6):
    walls.append(Wall([13, i]))
for i in range(7, 11):
    walls.append(Wall([13, i]))
door = LockedDoor([13, 6], "key28")
chest = LockedChest([18, 5], "key17")

player1.inventory = [ \
    "key11", "key12", "key13", "key14", "key15", \
    "key16", "key17", "key18", "key19", "key10" \
]

player2.inventory = [ \
    "key21", "key22", "key23", "key24", "key25", \
    "key26", "key27", "key28", "key29", "key20" \
]


def at_end():
    if _world.grid[18, 3] != None:
        raise Exception("Failure")
    
        
